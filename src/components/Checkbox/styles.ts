import styled from 'styled-components';

export const Container = styled.div`

custom-checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.custom-checkbox .label {
  font-size: 1.2em;
  margin: 0 10px;
}

.custom-checkbox .checkmark {
  width: 35px;
  height: 35px;
  border: 2px solid #222;
  display: inline-block;
  border-radius: 3px;
  background: #222 url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png) center/1250% no-repeat;
  transition: background-size 0.2s ease;
}

.custom-checkbox input:checked + .checkmark {
  background-size: 60%;
  transition: background-size 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
}

.custom-checkbox input {
  display: none;
}
`;
