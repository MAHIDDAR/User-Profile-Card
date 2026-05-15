import myphoto from './Mahiddar_Reddy_photo1.jpg';
import './App.css';

import ProfileCard from './components/ProfileCard';

function App() {

  const user = {
    name: 'Mahiddar Reddy',
    role: 'Associate Software Engineer',
    bio:  'Passionate about frontend and backend development with a strong interest in learning new technologies. I enjoy building clean and user-friendly interfaces while improving my React skills every day.',
    image: myphoto,
    location: 'Andhra Pradesh, India',
    
  }

  return (
    <div className='app'>

      <h1 className='main-heading'>My React Profile</h1>

      <ProfileCard
        name={user.name}
        role={user.role}
        bio={user.bio}
        image={user.image}
        location={user.location}
      />

    </div>
  );
}

export default App;
