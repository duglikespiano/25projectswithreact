import { discoverComponents, updateHexColor as generateColor } from '../../utils/componentDiscovery';

// Automatically discover all components from the directory structure
export const componentsInfo = discoverComponents();

// Re-export the color utility
export const updateHexColor = generateColor;
