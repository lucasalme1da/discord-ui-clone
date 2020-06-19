import styled from "styled-components"

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CI - Channel Info

// SL - Server List
// CL - Channel List
// CD - Channel Data
// UL - User List

// SL - Server List
// UI - User Info
// CD - Channel Data
// UL - User List

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  height: 100vh;
  `;