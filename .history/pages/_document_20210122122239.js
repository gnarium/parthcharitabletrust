import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8"/>

        <title>Parth  Charitable Trust</title>

        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="assets/images/favicon.png" type="image/png"/>
        <link rel="stylesheet" href="assets/css/magnific-popup.css"/>
        <link rel="stylesheet" href="assets/css/animate.css"/>
        <link rel="stylesheet" href="assets/css/slick.css"/>
        <link rel="stylesheet" href="assets/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/css/default.css"/>
        <link rel="stylesheet" href="assets/css/style.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="assets/js/vendor/modernizr-3.7.1.min.js"></script>

    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <script src="assets/js/slick.min.js"></script>

    <script src="assets/js/jquery.magnific-popup.min.js"></script>

    <script src="assets/js/jquery.appear.min.js"></script>
    
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.js"></script>

    <script src="assets/js/wow.min.js"></script>

    <script src="assets/js/main.js"></script>
    
    
    </body>
      </Html>
    )
  }
}

export default MyDocument;
