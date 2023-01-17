import React from 'react';
import { SettingsNav } from '../../entities/settings-nav';
import { UnitSelector } from '../../features/unit-selector';
import { Container } from '../../shared/ui/container/container';
import { RoundBtn } from '../../shared/ui/roundbtn';
import { Title } from '../../shared/ui/title/title';
import { Header } from '../../widgets/header/header';
import { SettingsHeader } from '../../widgets/header/settings';

export const SettingsPage = () => {
  return (
    <>
      <SettingsHeader />
      <SettingsNav />
      <UnitSelector />
    </>
  );
};
