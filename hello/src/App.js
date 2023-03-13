import './index.css';
import Element from './components/Element';

function App() {
  const user_available = true;
  return (
    <div className="App bg-green-600 m-3 p-4">
      {
        user_available ? 
        <>
          <div className='flex flex-wrap'>
            <Element name = "Andre " position = "React developer" image = "https://images.unsplash.com/photo-1677261905060-7a93f54682fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"/>
            <Element name = "Mash " position = "mobile developer" image = "https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"/>
            <Element name = "Ortega " position = "software engineer " image = "https://images.unsplash.com/photo-1677700674613-4ba4a1bb026d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
            <Element name = "Sally " position = "React developer" image = "https://images.unsplash.com/photo-1677537946723-86a6d81741b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
            <Element name = "Jerome " position = "mobile developer" image = "https://images.unsplash.com/photo-1677261905060-7a93f54682fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"/>
            <Element name = "Brant " position = "software engineer" image = "https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"/>
            <Element name = "Drill " position = "React developer" image = "https://images.unsplash.com/photo-1677700674613-4ba4a1bb026d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
            <Element name = "Kent " position = "mobile developer" image = "https://images.unsplash.com/photo-1677537946723-86a6d81741b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
            <Element name = "Frank " position = "software engineer" image = "https://images.unsplash.com/photo-1677261905060-7a93f54682fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"/>
          </div>
        </>
        :
        <h2>User not registered</h2>
      }
    </div>
  );
}

export default App;
