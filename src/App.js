import Board from './components/board'
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
function App() {
  return (
    <Container>
      <Board />
    </Container>
  );
}

export default App;
