import React from "react";

const Footer = () => {
  return (
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Williams • © 2024</p>
    <ul>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/contact">Contact Us</a></li>
    </ul>
        </Flex>
      </footer>
  );
};

export default Footer;