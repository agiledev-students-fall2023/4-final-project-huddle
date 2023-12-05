import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Adjust the import path as needed

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <form>
      <label>
        Theme: 
        <select className='settingBar' value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </label>
    </form>
  );
}

export default Settings;
