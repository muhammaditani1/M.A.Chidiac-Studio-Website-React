import { useEffect } from 'react';

function LandbotChat() {
  useEffect(() => {
    const initLandbot = () => {
      if (window.myLandbot) {
        return; // Make sure we only create one instance
      }

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';

      script.onload = () => {
        window.myLandbot = new window.Landbot.Livechat({
          configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1790293-Y6JL9FHMJNK8UFK7/index.json',
        });
      };

      document.head.appendChild(script);
    };

    // Initialize Landbot on first mouseover or touchstart
    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    // Cleanup
    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return null; // This component does not render anything
}

export default LandbotChat;
