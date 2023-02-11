import styled from "styled-components";

export const Block = styled.div`
  height: 100vh;
  width: 100%;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

export const Tool = styled.div`
  height: 95vh;
  width: 400px;
  margin: 20px;
  background: #1e1e1e;
  border-radius: 10px;
  border: 0.5px solid #2e2e2e;
  padding: 20px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #fff;
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 0;
    width: 5px;
    background: #000;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #2e2e2e;
    border: 1px solid #000;
  }
  .images {
    border-bottom: 1px solid #2e2e2e;
    min-height: 130px;
    label {
      border: 0.5px solid #2e2e2e;
      height: 50px;
      width: 100%;
      background: #000;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      font-family: sans-serif;
      outline: none;
      border-radius: 10px;
      padding: 10px 20px;
      transition: 1s;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 25px;
        margin: 0 10px;
      }
    }
    button {
      border: 0.5px solid #2e2e2e;
      height: 50px;
      background: #000;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      font-family: sans-serif;
      outline: none;
      border-radius: 10px;
      padding: 10px 20px;
      margin: 10px 0;
      width: 100%;
      transition: 1s;
      &:focus {
        background: #2e2e2e;
      }
    }
    input {
      display: none;
    }
    .lines {
      div {
        display: flex;
        align-items: center;
        margin: 3px 0;
        justify-content: space-between;
        .img {
          background: #000;
          height: 70px;
          width: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #2e2e2e;
          border-radius: 5px;
          overflow: hidden;
          img {
            max-height: 67px;
            max-width: 67px;
          }
        }
      }
    }
    h4 {
      margin-left: 20px;
    }
  }
  .inputs {
    input {
      border: 0.5px solid #2e2e2e;
      height: 45px;
      width: 100%;
      background: #000;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      font-family: sans-serif;
      outline: none;
      border-radius: 10px;
      padding: 10px 20px;
      transition: 1s;
      display: flex;
      margin: 10px 0;
      justify-content: center;
      align-items: center;
      &:focus {
        background: #2e2e2e;
      }
    }
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    height: 70vh;
  }
`;

export const Result = styled.div`
  height: 95vh;
  width: calc(100% - 400px);
  margin: 20px;
  background: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  border: 0.5px solid #2e2e2e;
  .box {
    width: 100%;
    height: 88%;
    border-radius: 10px;
    border: 0.5px solid #2e2e2e;
    background: transparent;
    overflow: hidden;
    padding: 5px;
    display: flex;
    background: ${p => p.image};
    .card {
      border-radius: 10px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
      background: transparent;
      background: ${p => p.box};
    }
    .lines {
      width: 600px;
      .line1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card:nth-child(1) {
          width: 250px;
          height: 225px;
          border: 1px solid #2e2e2e;
          img {
            max-width: 250px;
            max-height: 225px;
          }
        }
        .card:nth-child(2) {
          width: 400px;
          height: 225px;
          border: 1px solid #2e2e2e;
          img {
            max-width: 400px;
            max-height: 225px;
          }
        }
      }
      .line2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card:nth-child(1) {
          width: 400px;
          height: 225px;
          border: 1px solid #2e2e2e;
          img {
            max-width: 400px;
            max-height: 225px;
          }
        }
        .card:nth-child(2) {
          width: 250px;
          height: 225px;
          border: 1px solid #2e2e2e;
          img {
            max-width: 250px;
            max-height: 225px;
          }
        }
      }
    }
    .blog {
      .card {
        width: 245px;
        height: 460px;
        border: 1px solid #2e2e2e;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
        img {
          max-width: 245px;
          max-height: 460px;
        }
      }
    }
  }
  .line {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border: 0.5px solid #2e2e2e;
    height: 50px;
    background: #000;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    font-family: sans-serif;
    outline: none;
    border-radius: 10px;
    padding: 10px 20px;
    transition: 1s;
    &:focus {
      background: #2e2e2e;
    }
  }
  @media screen and (max-width: 750px) {
    width: calc(100% - 40px);
    .box {
      overflow: scroll;
      border-radius: 10px;
      &::-webkit-scrollbar {
        display: none;
      }
      .lines {
        .line1 {
          display: flex;
          flex-wrap: wrap;
          .card {
            width: 100% !important;
            height: 50%;
            border: 1px solid #2e2e2e;
            img {
              max-width: 100% !important;
              max-height: 50%;
            }
          }
        }
        .line2 {
          display: none;
        }
      }
      .blog {
        display: none;
      }
    }
  }
`;