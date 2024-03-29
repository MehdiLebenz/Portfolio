import styled from 'styled-components';

const SkillsWrapper = styled.div`
  .skillsContainer {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: 100%;
    flex-direction: row;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .container {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .text {
    color: black;
    text-align: center;
  }
  .Typewriter__wrapper span {
    color: #2f4f4f;
    background-color: #eeaeca;
    text-align: justify;
  }
  .Typewriter__cursor {
    visibility: hidden;
  }
`;
export default SkillsWrapper;
