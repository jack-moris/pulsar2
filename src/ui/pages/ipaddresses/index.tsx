// index.tsx
// page-> /ipaddresses
import { useState } from 'react';
import { MainPageContainer } from '../../../styles/global';
import {
  IPAllocateButton,
  PageHeader,
  IPAddressesHeader,
  IPAddressesMainContent,
} from './styled';
import SearchComponent, { SearchComponentProps } from '../../../ui/components/common/input/search';
import IPAddressesTable, { IPAddressesTableProps } from '../../components/lists/ipaddress-table';
import ShoppingBagIcon from '../../components/common/svgicons/ShoppingBagIcon';
import { Color } from '../../../constants/color';

export default function ServersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>IP Addresses</strong>
        </h3>
      </PageHeader>
      <IPAddressesMainContent>
        <IPAddressesHeader>
          <SearchComponent 
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search IP addresses..."
          />
          <IPAllocateButton className='button-secondary'>
            <ShoppingBagIcon stroke={Color.$white} />
            <label>Allocate additional IPs</label>
          </IPAllocateButton>
        </IPAddressesHeader>
        <IPAddressesTable searchQuery={searchQuery} />
      </IPAddressesMainContent>
    </MainPageContainer>
  );
}