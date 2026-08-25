import { Button } from 'antd';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button
      type="text"
      shape="circle"
      icon={
        theme === 'light' ? (
          <Moon className="theme-icon moon-icon" size={20} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', verticalAlign: 'middle' }} />
        ) : (
          <Sun className="theme-icon sun-icon" size={20} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', verticalAlign: 'middle' }} />
        )
      }
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    />
  );
}
