import React from 'react';
import { SettingsNav } from '../../entities/settings-nav';
import { ThemeSelector } from '../../features/theme-selector';
import { UnitSelector } from '../../features/unit-selector';
import { SettingsHeader } from '../../widgets/header/settings';

export const SettingsPage = () => {
  return (
    <>
      <SettingsHeader />
      <SettingsNav />
      <UnitSelector />
      <ThemeSelector />
    </>
  );
};
