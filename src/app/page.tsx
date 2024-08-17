'use client'; 

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const getFakeTime = () => {
  const fakeHours = Math.floor(Math.random() * 24);
  const fakeMinutes = Math.floor(Math.random() * 60);
  return `${fakeHours.toString().padStart(2, '0')}:${fakeMinutes.toString().padStart(2, '0')}`;
};

const TimeMachine = () => {
  const [mode, setMode] = useState('real');
  const [time, setTime] = useState('');

  const handleClick = () => {
    if (mode === 'real') {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    } else {
      const fakeTime = getFakeTime();
      setTime(fakeTime);
    }
  };

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'real' ? 'fake' : 'real'));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <Card className="w-full max-w-md p-6 bg-white text-black rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-3xl font-bold mb-4">Time Machine</h1>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <Button onClick={handleClick} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            What is the time?
          </Button>
          <div className="text-2xl mb-4">{time}</div>
          <div className="flex items-center">
            <span className="mr-2">Real</span>
            <Switch checked={mode === 'fake'} onCheckedChange={toggleMode} />
            <span className="ml-2">Fake</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeMachine;
