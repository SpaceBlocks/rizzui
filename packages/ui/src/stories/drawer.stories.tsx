// drawer.stories.ts|tsx
import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Drawer, type DrawerSize } from '../components/drawer';
import { Button } from '../components/button';
import { Badge } from '../components/badge';
import { ActionIcon } from '../components/action-icon';
import { Title, Text } from '../components/typography';
import { Empty } from '../components/empty';
import { EmptyProductBoxIcon } from '../components/empty/empty-icons';
import { ShoppingBagIcon } from '../icons/shopping-bag';
import { XIcon } from '../icons/x-mark';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Drawer>;

type DrawerPropsType = {
  isOpen: boolean;
  size?: DrawerSize;
  placement?: 'top' | 'right' | 'bottom' | 'left';
};

export const Default = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  return (
    <>
      <Button onClick={() => setDrawerState(true)}>Open Drawer</Button>
      <Drawer isOpen={drawerState} onClose={() => setDrawerState(false)}>
        <div className="px-5 py-4">Default Drawer</div>
      </Drawer>
    </>
  );
};

export const Sizes = () => {
  const [drawerSate, setDrawerState] = React.useState<DrawerPropsType>({
    isOpen: false,
    size: 'md',
  });
  return (
    <>
      <div className="flex items-center justify-around">
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: 'sm',
            }))
          }
        >
          sm
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: 'md',
            }))
          }
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: 'lg',
            }))
          }
        >
          lg
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: 'xl',
            }))
          }
        >
          xl
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setDrawerState((prevState) => ({
              ...prevState,
              isOpen: true,
              size: 'full',
            }))
          }
        >
          full
        </Button>
      </div>
      <Drawer
        isOpen={drawerSate.isOpen}
        size={drawerSate.size}
        onClose={() =>
          setDrawerState((prevState) => ({ ...prevState, isOpen: false }))
        }
      >
        <div className="px-5 py-4">
          This is{' '}
          <Text as="strong">
            &quot;
            {drawerSate.size}
            &quot;
          </Text>{' '}
          size Drawer
        </div>
      </Drawer>
    </>
  );
};

export const WithPlacement = () => {
  const [drawerSate, setDrawerState] = React.useState<DrawerPropsType>({
    isOpen: false,
    placement: 'left',
  });
  return (
    <>
      <div className="relative py-5">
        <div className="flex h-72 flex-col items-center justify-between">
          <Button
            variant="outline"
            onClick={() =>
              setDrawerState((prevState) => ({
                ...prevState,
                isOpen: true,
                placement: 'top',
              }))
            }
          >
            Top Drawer
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setDrawerState((prevState) => ({
                ...prevState,
                isOpen: true,
                placement: 'bottom',
              }))
            }
          >
            Bottom Drawer
          </Button>
        </div>
        <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform items-center justify-around">
          <Button
            variant="outline"
            onClick={() =>
              setDrawerState((prevState) => ({
                ...prevState,
                isOpen: true,
                placement: 'left',
              }))
            }
          >
            Left Drawer
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setDrawerState((prevState) => ({
                ...prevState,
                isOpen: true,
                placement: 'right',
              }))
            }
          >
            Right Drawer
          </Button>
        </div>
      </div>
      <Drawer
        enableResizer={true}
        customSize={400}
        isOpen={drawerSate.isOpen}
        placement={drawerSate.placement}
        onClose={() =>
          setDrawerState((prevState) => ({ ...prevState, isOpen: false }))
        }
      >
        <div className="px-5 py-4">
          The drawer placement on the{' '}
          <Text as="strong">
            &quot;
            {drawerSate.placement}
            &quot;
          </Text>
        </div>
      </Drawer>
    </>
  );
};

export const WithCustomSize = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  return (
    <>
      <Button onClick={() => setDrawerState(true)}>Custom Size Drawer</Button>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        customSize={600}
      >
        <div className="px-5 py-4">Custom Size = 600px</div>
      </Drawer>
    </>
  );
};

export const WithCustomStyle = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  return (
    <>
      <Button onClick={() => setDrawerState(true)}>Custom Style Drawer</Button>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        overlayClassName="backdrop-blur"
        containerClassName="!max-w-[calc(100%-480px)] !shadow-2xl"
      >
        <div className="px-5 py-4">Custom Style</div>
      </Drawer>
    </>
  );
};

export const WithShoppingCart = () => {
  const [drawerState, setDrawerState] = React.useState(false);
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setDrawerState(true)}
        className="relative inline-flex cursor-pointer"
      >
        <ShoppingBagIcon className="h-auto w-8" strokeWidth={1.2} />
        <Badge
          size="sm"
          enableOutlineRing
          className="absolute right-1 top-0.5 -translate-y-1/3 translate-x-1/2"
        >
          0
        </Badge>
      </div>
      <Drawer isOpen={drawerState} onClose={() => setDrawerState(false)}>
        <div className="flex min-h-full flex-col px-5 py-4">
          <header className="flex items-center justify-between">
            <Title as="h4">Shopping Cart</Title>
            <ActionIcon
              size="sm"
              variant="outline"
              onClick={() => setDrawerState(false)}
            >
              <XIcon className="h-auto w-5" strokeWidth={1.5} />
            </ActionIcon>
          </header>
          {/* End of drawer header */}
          <div className="flex flex-grow flex-col items-center justify-center">
            <Empty
              image={<EmptyProductBoxIcon />}
              text="No Product Available"
              textClassName="mt-1"
            />
          </div>
          {/* End of drawer body */}
          <Button size="lg" className="sticky bottom-0 z-10">
            Proceed to Checkout
          </Button>
          {/* End of drawer footer */}
        </div>
      </Drawer>
    </>
  );
};
