import { useState } from 'react'
import { Header } from "./components/Header";
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleNewTransactionModalOpen = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleNewTransactionModalClose = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleNewTransactionModalOpen} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalClose}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
