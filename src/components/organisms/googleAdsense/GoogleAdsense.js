import * as React from "react";

class GoogleAdsense extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }

  render() {
    return (
      <ins className="adsbygoogle"
           data-ad-client="ca-pub-8656317561816919"
           data-ad-slot="XXX"
      />
    );
  }
}

export default GoogleAdsense;
