// SearchComponent.tsx
import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--color-gray-400);
  width: 100%;
  max-width: 600px;
  background-color: var(--color-dark-primary);
  color: white;
  
  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
  }
`;

// Export the interface so it can be imported elsewhere
export interface SearchComponentProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ value, onChange, placeholder }) => {
  return (
    <SearchInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchComponent;