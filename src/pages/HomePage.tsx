/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const homePageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f9a8d4, #fbcfe8);
  color: #333;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const buttonStyle = css`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #9333ea;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7e22ce;
  }
`;

const HomePage = () => {
  return (
    <div css={homePageStyle}>
      <h1>Welcome to My Blog!</h1>
      <p>This is a place to share and explore new ideas.</p>
      <button css={buttonStyle}>Explore</button>
    </div>
  );
};

export default HomePage;
