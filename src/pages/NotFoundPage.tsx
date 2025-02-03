/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const notFoundStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f4f6;
  color: #1f2937;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const linkStyle = css`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #2563eb;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #1d4ed8;
  }
`;

const NotFoundPage = () => {
  return (
    <div css={notFoundStyle}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" css={linkStyle}>
        Go back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
