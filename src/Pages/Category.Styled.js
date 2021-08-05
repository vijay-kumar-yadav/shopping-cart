import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const Sidebar = styled.div`
  text-align: center;
  width: 30%;
  vertical-align: top;
  color: rgb(6, 8, 8);

  @media screen and (max-width: 1037px) {
    display: none;
  }
`;
export const SidebarBtn = styled.div`
  margin-top: 40%;
  text-align: left;
  margin-left: 20%;
`;

export const Main = styled.div`
  text-align: center;
  color: rgb(0, 8, 8);

  width: 70%;
  @media screen and (max-width: 1037px) {
    width: 100%;
    height: 100%;
  }
`;
