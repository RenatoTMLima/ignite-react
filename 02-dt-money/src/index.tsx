import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          value: 6000,
          createdAt: new Date(2022, 6, 6)
        },
        {
          id: 2,
          title: 'Ifood',
          type: 'withdraw',
          category: 'Comida',
          value: 100,
          createdAt: new Date(2022, 6, 7)
        },
      ]
    })
  },
  
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
