import Linkss from './routes'
import { Provider } from 'react-redux'
import {store} from 'store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

let persistor = persistStore(store)
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Linkss />
      </PersistGate>
    </Provider>
  )
}

export default App