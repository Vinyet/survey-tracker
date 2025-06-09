import styled from 'styled-components';

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 1rem;
  font-size: 0.8rem;
  user-select: none;
  z-index: 1000;
`;

export default FooterStyle;
