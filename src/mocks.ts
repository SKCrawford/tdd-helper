const mockGroupIsPositive = {
  name: 'isPositive',
  tests: [{
    name: 'accepts 1',
  },{
    name: 'accepts 10',
  }, {
    name: 'rejects -1',
  }, {
    name: 'rejects -10',
  }],
  hooks: [{
    when: 'before all',
    what: 'create mock inputs',
  }],
};

const mockGroupIsNegative = {
  name: 'isNegative',
  tests: [{
    name: 'accepts -1',
  },{
    name: 'accepts -10',
  }, {
    name: 'rejects 1',
  }, {
    name: 'rejects 10',
  }],
  hooks: [{
    when: 'before all',
    what: 'create mock inputs',
  }],
};

const mockGroupToCoord = {
  name: 'toCoordinate',
  tests: [{
    name: 'produces validate coordinate for 1,1',
  }, {
    name: 'produces validate coordinate for 1,-1',
  }, {
    name: 'produces validate coordinate for -1,-1',
  }, {
    name: 'produces validate coordinate for -1,1',
  }, {
    name: 'throws error for 3.5, 2.5'
  }],
  hooks: [{
    when: 'before all',
    what: 'create mock coordinates'
  }],
};

const mockValidatorsGroup = {
  name: 'validators',
  groups: [mockGroupIsPositive, mockGroupIsNegative],
  hooks: [{
    when: 'before each',
    what: 'reset the mocks',
  }]
}

const mockTransformersGroup = {
  name: 'transformers',
  groups: [mockGroupToCoord],
  hooks: [{
    when: 'before each',
    what: 'reset the mocks',
  }]
}

export const mock = {
  groups: [mockValidatorsGroup, mockTransformersGroup],
  tests: [],
  hooks: [],
}
