import { ReactNode } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import type { NextPage } from 'next';

interface IBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  content: ReactNode;
  header: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  borderRadius?: number;
}

const BottomSheet: NextPage<IBottomSheetProps> = ({
  isOpen,
  onClose,
  content,
  header,
  size = 'md',
  borderRadius = 0,
}) => (
  <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size={size}>
    <DrawerOverlay />
    <DrawerContent background="brand.700" borderTopRadius={borderRadius}>
      <DrawerHeader color="brand.800">{header}</DrawerHeader>
      <DrawerBody>{content}</DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default BottomSheet;
