import React from 'react';
import { Button } from '../components/shared/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button>Button</Button>;

export const Disabled = () => <Button disabled>Button</Button>;
