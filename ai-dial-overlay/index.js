import { ChatOverlayManager } from '@epam/ai-dial-overlay';

const chatOverlayManager = new ChatOverlayManager();

chatOverlayManager.createOverlay({
  id: 'etfai-ai-dial-overlay',
  position: 'right-bottom',
  width: 300,
  height: 300,
  zIndex: 6,
  hostDomain: window.location.origin,
  domain: 'https://chat.lab.epam.com/?isolated-model-id=b63a1fb4-ff7c-4047-9887-f5d7d39d1f04',
  theme: 'dark',
});
