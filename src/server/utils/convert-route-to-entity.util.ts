const mapping: Record<string, string> = {
  information: 'information',
  invitations: 'invitation',
  sections: 'section',
  users: 'user',
  whiteboards: 'whiteboard',
  workspaces: 'workspace',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
