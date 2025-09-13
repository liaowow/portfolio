import { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Body, Events } from 'matter-js';
import type { FunItem } from '../lib/types/fun-item';

export async function initPhysicsGyroscope(): Promise<void> {
  const container = document.querySelector('.kaleidoscope-container') as HTMLElement;
  const categoryBtns = document.querySelectorAll('.category-btn');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  if (!container) return;
  
  // Create engine with gyroscope-responsive gravity
  const engine = Engine.create();
  engine.world.gravity.y = 0.5; // Initial gravity
  engine.world.gravity.x = 0;
  
  // Gyroscope state
  let gyroscopeActive = false;
  let currentGamma = 0; // Left-right tilt
  let currentBeta = 0;  // Front-back tilt
  
  // Create renderer
  const render = Render.create({
    element: container,
    engine: engine,
    options: {
      width: container.clientWidth - 64, // Account for padding
      height: container.clientHeight - 64,
      wireframes: false,
      background: 'transparent',
      showAngleIndicator: false,
      showVelocity: false
    }
  });

  const renderWidth = render.options.width!;
  const renderHeight = render.options.height!;

  // Create boundaries (invisible walls)
  const walls = [
    Bodies.rectangle(renderWidth / 2, -25, renderWidth, 50, { isStatic: true, render: { visible: false } }),
    Bodies.rectangle(renderWidth / 2, renderHeight + 25, renderWidth, 50, { isStatic: true, render: { visible: false } }),
    Bodies.rectangle(-25, renderHeight / 2, 50, renderHeight, { isStatic: true, render: { visible: false } }),
    Bodies.rectangle(renderWidth + 25, renderHeight / 2, 50, renderHeight, { isStatic: true, render: { visible: false } })
  ];

  // Fetch Fun items from API
  let funItems: FunItem[] = [];
  try {
    const response = await fetch('/api/fun');
    const data = await response.json();
    funItems = data.items || [];
  } catch (error) {
    console.error('Failed to fetch Fun items:', error);
    // Fallback to empty array
    funItems = [];
  }

  // Create physics bodies for each piece
  const physicsBodies: any[] = [];
  const getCategoryIcon = (category: string): string => {
    const icons = {
      food: '🍕',
      art: '🎨',
      nature: '🌲',
      entertainment: '🎭'
    };
    return icons[category as keyof typeof icons] || '📍';
  };

  const getCategoryColor = (category: string): string => {
    const colors = {
      food: 'rgba(239, 68, 68, 0.8)',
      art: 'rgba(168, 85, 247, 0.8)',
      nature: 'rgba(34, 197, 94, 0.8)',
      entertainment: 'rgba(59, 130, 246, 0.8)'
    };
    return colors[category as keyof typeof colors] || 'rgba(107, 114, 128, 0.8)';
  };

  // Transform FunItems into pieceData format
  const pieceData = funItems.map(item => ({
    category: item.category,
    icon: getCategoryIcon(item.category),
    title: item.title,
    location: item.location,
    color: getCategoryColor(item.category),
    id: item.id
  }));

  pieceData.forEach((data) => {
    const x = Math.random() * (renderWidth - 120) + 60;
    const y = Math.random() * (renderHeight - 120) + 60;
    
    const body = Bodies.rectangle(x, y, 120, 120, {
      restitution: 0.6,
      friction: 0.1,
      frictionAir: 0.01,
      render: {
        fillStyle: data.color,
        strokeStyle: 'rgba(255, 255, 255, 0.3)',
        lineWidth: 2
      }
    });

    // Store custom data on the body
    (body as any).pieceData = data;

    // Add some initial rotation
    Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
    physicsBodies.push(body);
  });

  // Add mouse control
  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });

  // Add all bodies to world
  Composite.add(engine.world, [...walls, ...physicsBodies, mouseConstraint]);

  // Run the engine and renderer
  const runner = Runner.create();
  Runner.run(runner, engine);
  Render.run(render);

  // Custom rendering on canvas
  const canvas = render.canvas;
  const ctx = canvas.getContext('2d');

  // Override render to add custom content
  const customRender = function() {
    physicsBodies.forEach((body: any) => {
      if (body.pieceData && ctx && body.render.visible) { // Only render visible bodies
        const pos = body.position;
        const angle = body.angle;
        
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(angle);
        
        // Draw icon
        ctx.font = '32px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(body.pieceData.icon, 0, -10);
        
        // Draw title
        ctx.font = 'bold 12px Arial';
        ctx.fillText(body.pieceData.title, 0, 15);
        
        // Draw location
        ctx.font = '10px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillText(body.pieceData.location, 0, 30);
        
        // Draw details button (bottom-right corner of card)
        const buttonSize = 30;
        const buttonX = 40; // Bottom-right of 120px card
        const buttonY = 40;
        
        // Button background (circular)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(buttonX, buttonY, buttonSize/2, 0, Math.PI * 2);
        ctx.fill();
        
        // Button border
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Details icon (info "i")
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('i', buttonX, buttonY + 5);
        
        ctx.restore();
        
        // Store button position for click detection (in global coordinates)
        body.detailsButton = {
          x: pos.x + Math.cos(angle) * buttonX - Math.sin(angle) * buttonY,
          y: pos.y + Math.sin(angle) * buttonX + Math.cos(angle) * buttonY,
          radius: buttonSize/2
        };
      }
    });
  };

  // Add custom render function to the render loop
  Events.on(render, 'afterRender', customRender);

  // Gyroscope functionality
  function requestGyroscopePermission() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      // iOS 13+ devices
      (DeviceOrientationEvent as any).requestPermission()
        .then((response: string) => {
          if (response == 'granted') {
            enableGyroscope();
          }
        })
        .catch(console.error);
    } else {
      // Non-iOS or older devices
      enableGyroscope();
    }
  }

  function enableGyroscope() {
    gyroscopeActive = true;
    window.addEventListener('deviceorientation', handleOrientation, true);
  }

  function disableGyroscope() {
    gyroscopeActive = false;
    window.removeEventListener('deviceorientation', handleOrientation, true);
    // Reset to normal gravity
    engine.world.gravity.x = 0;
    engine.world.gravity.y = 0.5;
  }

  function handleOrientation(event: DeviceOrientationEvent) {
    if (!gyroscopeActive) return;
    
    // Get device orientation
    currentGamma = event.gamma || 0; // Left-right tilt (-90 to 90)
    currentBeta = event.beta || 0;   // Front-back tilt (-180 to 180)
    
    // Convert orientation to gravity
    const maxTilt = 45; // Maximum tilt angle to consider
    const maxGravity = 1.0;
    
    // Normalize and apply gravity based on device tilt
    engine.world.gravity.x = Math.max(-maxGravity, Math.min(maxGravity, (currentGamma / maxTilt) * maxGravity));
    engine.world.gravity.y = Math.max(-maxGravity, Math.min(maxGravity, (currentBeta / maxTilt) * maxGravity));
  }

  // Add gyroscope toggle button functionality (mobile only)
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (typeof window.orientation !== "undefined") ||
           (navigator.maxTouchPoints > 1);
  }

  if (isMobileDevice()) {
    const gyroscopeBtn = document.createElement('button');
    gyroscopeBtn.className = 'control-btn';
    gyroscopeBtn.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
      <span class="gyroscope-text">Enable Gyro</span>
    `;
    
    gyroscopeBtn.addEventListener('click', () => {
      if (!gyroscopeActive) {
        requestGyroscopePermission();
        gyroscopeBtn.querySelector('.gyroscope-text')!.textContent = 'Disable Gyro';
      } else {
        disableGyroscope();
        gyroscopeBtn.querySelector('.gyroscope-text')!.textContent = 'Enable Gyro';
      }
    });

    // Add gyroscope button to controls
    const controlsContainer = document.querySelector('.kaleidoscope-controls');
    if (controlsContainer) {
      controlsContainer.appendChild(gyroscopeBtn);
    }
  }

  // Category filtering
  let currentCategory = 'all';
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = (btn as HTMLElement).dataset.category;
      currentCategory = category || 'all';
      
      // Update active button
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Hide/show bodies based on category
      physicsBodies.forEach((body: any) => {
        if (category === 'all' || body.pieceData.category === category) {
          body.render.visible = true;
          Body.set(body, 'isSensor', false);
        } else {
          body.render.visible = false;
          Body.set(body, 'isSensor', true);
        }
      });
    });
  });

  // Shake/spin functionality - more gyroscopic
  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      physicsBodies.forEach((body: any) => {
        if (currentCategory === 'all' || body.pieceData.category === currentCategory) {
          // Create spinning motion like a gyroscope
          const spinForce = 0.03;
          const angle = Math.random() * Math.PI * 2;
          const forceX = Math.cos(angle) * spinForce;
          const forceY = Math.sin(angle) * spinForce;
          Body.applyForce(body, body.position, { x: forceX, y: forceY });
          Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.3); // More spin
        }
      });
    });
  }

  // Reset functionality
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      physicsBodies.forEach((body: any) => {
        const x = Math.random() * (renderWidth - 120) + 60;
        const y = Math.random() * (renderHeight - 120) + 60;
        Body.setPosition(body, { x, y });
        Body.setVelocity(body, { x: 0, y: 0 });
        Body.setAngularVelocity(body, 0);
        Body.setAngle(body, 0);
      });
    });
  }

  // Mouse cursor change on hover
  canvas.addEventListener('mousemove', (event: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Check if hovering over any details button
    const hoveringButton = physicsBodies.some((body: any) => {
      if (!body.render.visible || !body.detailsButton) return false;
      const button = body.detailsButton;
      const distance = Math.sqrt((x - button.x) ** 2 + (y - button.y) ** 2);
      return distance <= button.radius;
    });
    
    // Change cursor based on hover state
    canvas.style.cursor = hoveringButton ? 'pointer' : 'default';
  });

  // Click interaction - details button vs card spin
  canvas.addEventListener('click', (event: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Check for details button clicks first
    const buttonClickedBody = physicsBodies.find((body: any) => {
      if (!body.render.visible || !body.detailsButton) return false;
      const button = body.detailsButton;
      const distance = Math.sqrt((x - button.x) ** 2 + (y - button.y) ** 2);
      return distance <= button.radius;
    });
    
    if (buttonClickedBody) {
      // Details button clicked - open modal
      const funItemId = buttonClickedBody.pieceData.title.toLowerCase().replace(/\s+/g, '-');
      
      import('../scripts/funitem-detail.ts').then(module => {
        module.openFunItemDetail(funItemId);
      });
      return; // Don't process as card click
    }
    
    // Check for general card clicks (for spinning)
    const clickedBody = physicsBodies.find((body: any) => {
      const pos = body.position;
      const distance = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
      return distance < 60 && body.render.visible; // 60 is half the body size
    });
    
    if (clickedBody) {
      // Card clicked (not button) - add gyroscopic spin
      Body.setAngularVelocity(clickedBody, 0.4);
      const spinDirection = Math.random() > 0.5 ? 1 : -1;
      Body.applyForce(clickedBody, clickedBody.position, { 
        x: spinDirection * 0.01, 
        y: -0.015 
      });
    }
  });

  // Hide original HTML pieces since we're using canvas
  const htmlPieces = document.querySelectorAll('.kaleidoscope-piece');
  htmlPieces.forEach(piece => (piece as HTMLElement).style.display = 'none');
}