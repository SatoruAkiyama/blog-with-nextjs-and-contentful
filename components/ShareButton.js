import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

const ShareButton = ({ url }) => (
  <>
    <FacebookShareButton url={url}>
      {/* <span style={{ fontSize: `22px`, color: `#fff` }}>SHARE</span>{" "} */}
      <FacebookIcon size="32px" round />
    </FacebookShareButton>
    <TwitterShareButton url={url} style={{ marginLeft: `15px` }}>
      <TwitterIcon size="32px" round />
    </TwitterShareButton>
    <WhatsappShareButton url={url} style={{ marginLeft: `15px` }}>
      <WhatsappIcon size="32px" round />
    </WhatsappShareButton>
    <LineShareButton url={url} style={{ marginLeft: `15px` }}>
      <LineIcon size="32px" round />
    </LineShareButton>
  </>
);

export default ShareButton;
