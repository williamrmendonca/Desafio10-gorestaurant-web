import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  /* padding: 30px; */


  header {
    max-width: 95%;
    /* margin: 0 15px; */
    padding-top: 30px;
    padding-bottom: 30px;
    /* padding: 0 0 60px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


  }

  nav {
    /* padding: 0 0 90px; */
    padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.react-toggle {
      /* padding-bottom: 30px; */
      margin-bottom: 30px;
    }

      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          margin: 0 auto;

          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }



`;
