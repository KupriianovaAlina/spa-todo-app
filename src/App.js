import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import navigationRoutes from './routs';
import store from './store/store'
import NotFound from './components/NotFound'
import ProjectsPage from './components/ProjectsPage';
import TasksPage from './components/TasksPage';
import Header from './components/Header';
import ContextProvider from './components/ContextProvider';

function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path={navigationRoutes.projects()} element={<ProjectsPage />} />
              <Route path={navigationRoutes.tasks()} element={<TasksPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DndProvider>
      </ContextProvider>
    </Provider>
  );
}

export default App;
