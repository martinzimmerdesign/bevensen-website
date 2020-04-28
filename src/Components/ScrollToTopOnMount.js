import { useEffect } from "react";
import useCurrentWitdh from 'Hooks/useCurrentWitdh.js';
import useCurrentHeight from 'Hooks/useCurrentHeight.js';

function ScrollToTopOnMount(props) {

const width = useCurrentWitdh();
const height = useCurrentHeight();

  useEffect(() => {
    if(width > 720) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, height);
      }

  });
  return null;
}
export default ScrollToTopOnMount;
