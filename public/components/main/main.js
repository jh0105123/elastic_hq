import React from "react";
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText
} from "@elastic/eui";
import { FormattedMessage } from "@kbn/i18n/react";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    const { httpClient } = this.props;
    httpClient.get("../api/ElasticHQ/example").then(resp => {
      this.setState({ time: resp.data.time });
    });
  }
  render() {
    $(document).ready(function() {
      $.ajax({
        crossOrigin: true,
        dataType: "json",
        url: "http://192.168.99.201:9200",
        success: function(data) {
          alert(data);
        }
      });
    });

    return (
      <EuiPage>
        {/* <iframe src="http://192.168.99.201:9200"></iframe> */}
      </EuiPage>
    );
  }
}
