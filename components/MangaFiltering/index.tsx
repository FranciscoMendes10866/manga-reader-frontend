import {
  Select,
  Flex,
  Input,
  useBreakpointValue,
  IconButton,
  Text,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CgOptions } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import type { NextPage } from 'next';

import {
  MangaAiringStatus,
  MangaFormatOptions,
  MangaCategories,
} from '../../assets/data';

interface IMangaFilteringProps {
  search: (value: string) => void;
  selectCategory: (option: string) => void;
  selectFormat: (option: string) => void;
  selectStatus: (option: string) => void;
  openBottomSheet: () => void;
}

const MangaFiltering: NextPage<IMangaFilteringProps> = ({
  search,
  selectCategory,
  selectFormat,
  selectStatus,
  openBottomSheet,
}) => {
  const visibility = useBreakpointValue({ base: 'none', md: 'flex' });
  const width = useBreakpointValue({ base: 'full', md: '180px', lg: '250px' });
  const filterButtonVisibility = useBreakpointValue({
    base: 'flex',
    md: 'none',
  });
  const selectComponentWidth = useBreakpointValue({
    md: '180px',
    lg: '250px',
  });
  const alignElements = useBreakpointValue({
    base: 'flex-end',
    md: 'center',
  });

  return (
    <Flex
      alignItems={alignElements}
      justifyContent="space-between"
      paddingBottom={14}
    >
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        flexDirection="column"
        width={width}
      >
        <Text
          marginBottom={2}
          color="brand.800"
          fontSize="sm"
          letterSpacing="wider"
        >
          Search
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BiSearch size={16} color="brand.800" />
          </InputLeftElement>
          <Input
            variant="filled"
            placeholder="Search"
            color="brand.800"
            backgroundColor="brand.900"
            fontSize="sm"
            onChange={(e) => search(e.target.value)}
          />
        </InputGroup>
      </Flex>
      <IconButton
        aria-label="Search database"
        icon={<CgOptions />}
        marginLeft={6}
        variant="ghost"
        background="brand.900"
        color="brand.800"
        display={filterButtonVisibility}
        onClick={openBottomSheet}
      />
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        flexDirection="column"
        display={visibility}
      >
        <Text
          marginBottom={2}
          color="brand.800"
          fontSize="sm"
          letterSpacing="wider"
        >
          Genre
        </Text>
        <Select
          placeholder="Any"
          color="brand.800"
          backgroundColor="brand.900"
          variant="filled"
          width={selectComponentWidth}
          icon={<RiArrowDropDownLine />}
          fontSize="sm"
          onChange={(e) => selectCategory(e.target.value)}
        >
          {MangaCategories.map((category, index) => (
            <option
              key={`manga-category-option-${index}`}
              value={category.value}
            >
              {category.value}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        flexDirection="column"
        display={visibility}
      >
        <Text
          marginBottom={2}
          color="brand.800"
          fontSize="sm"
          letterSpacing="wider"
        >
          Format
        </Text>
        <Select
          placeholder="Any"
          color="brand.800"
          backgroundColor="brand.900"
          variant="filled"
          width={selectComponentWidth}
          icon={<RiArrowDropDownLine />}
          fontSize="sm"
          onChange={(e) => selectFormat(e.target.value)}
        >
          {MangaFormatOptions.map((format, index) => (
            <option key={`manga-format-option-${index}`} value={format.name}>
              {format.name}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex
        alignItems="flex-start"
        justifyContent="center"
        flexDirection="column"
        display={visibility}
      >
        <Text
          marginBottom={2}
          color="brand.800"
          fontSize="sm"
          letterSpacing="wider"
        >
          Publishing status
        </Text>
        <Select
          placeholder="Any"
          color="brand.800"
          backgroundColor="brand.900"
          variant="filled"
          width={selectComponentWidth}
          icon={<RiArrowDropDownLine />}
          fontSize="sm"
          onChange={(e) => selectStatus(e.target.value)}
        >
          {MangaAiringStatus.map((status, index) => (
            <option key={`manga-status-option-${index}`} value={status.value}>
              {status.name}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
};

export default MangaFiltering;
