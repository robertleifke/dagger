export const dfmmABI = [
    { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
    { type: 'receive', stateMutability: 'payable' },
    {
        type: 'function',
        name: 'allocate',
        inputs: [
            { name: 'poolId', type: 'uint256', internalType: 'uint256' },
            { name: 'data', type: 'bytes', internalType: 'bytes' },
        ],
        outputs: [
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'deallocate',
        inputs: [
            { name: 'poolId', type: 'uint256', internalType: 'uint256' },
            { name: 'data', type: 'bytes', internalType: 'bytes' },
        ],
        outputs: [
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'getPool',
        inputs: [{ name: 'poolId', type: 'uint256', internalType: 'uint256' }],
        outputs: [
            {
                name: '',
                type: 'tuple',
                internalType: 'struct IDFMM.Pool',
                components: [
                    {
                        name: 'strategy',
                        type: 'address',
                        internalType: 'address',
                    },
                    {
                        name: 'tokenX',
                        type: 'address',
                        internalType: 'address',
                    },
                    {
                        name: 'tokenY',
                        type: 'address',
                        internalType: 'address',
                    },
                    {
                        name: 'reserveX',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'reserveY',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'totalLiquidity',
                        type: 'uint256',
                        internalType: 'uint256',
                    },
                    {
                        name: 'liquidityToken',
                        type: 'address',
                        internalType: 'address',
                    },
                ],
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'getReservesAndLiquidity',
        inputs: [{ name: 'poolId', type: 'uint256', internalType: 'uint256' }],
        outputs: [
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'init',
        inputs: [
            {
                name: 'params',
                type: 'tuple',
                internalType: 'struct IDFMM.InitParams',
                components: [
                    {
                        name: 'strategy',
                        type: 'address',
                        internalType: 'address',
                    },
                    {
                        name: 'tokenX',
                        type: 'address',
                        internalType: 'address',
                    },
                    {
                        name: 'tokenY',
                        type: 'address',
                        internalType: 'address',
                    },
                    { name: 'data', type: 'bytes', internalType: 'bytes' },
                ],
            },
        ],
        outputs: [
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
        ],
        stateMutability: 'payable',
    },
    {
        type: 'function',
        name: 'liquidityOf',
        inputs: [
            { name: 'account', type: 'address', internalType: 'address' },
            { name: 'poolId', type: 'uint256', internalType: 'uint256' },
        ],
        outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'lpTokenImplementation',
        inputs: [],
        outputs: [{ name: '', type: 'address', internalType: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'nonce',
        inputs: [],
        outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'pools',
        inputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
        outputs: [
            { name: 'strategy', type: 'address', internalType: 'address' },
            { name: 'tokenX', type: 'address', internalType: 'address' },
            { name: 'tokenY', type: 'address', internalType: 'address' },
            { name: 'reserveX', type: 'uint256', internalType: 'uint256' },
            { name: 'reserveY', type: 'uint256', internalType: 'uint256' },
            {
                name: 'totalLiquidity',
                type: 'uint256',
                internalType: 'uint256',
            },
            {
                name: 'liquidityToken',
                type: 'address',
                internalType: 'address',
            },
        ],
        stateMutability: 'view',
    },
    {
        type: 'function',
        name: 'swap',
        inputs: [
            { name: 'poolId', type: 'uint256', internalType: 'uint256' },
            { name: 'data', type: 'bytes', internalType: 'bytes' },
        ],
        outputs: [
            { name: '', type: 'uint256', internalType: 'uint256' },
            { name: '', type: 'uint256', internalType: 'uint256' },
        ],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'update',
        inputs: [
            { name: 'poolId', type: 'uint256', internalType: 'uint256' },
            { name: 'data', type: 'bytes', internalType: 'bytes' },
        ],
        outputs: [],
        stateMutability: 'nonpayable',
    },
    {
        type: 'function',
        name: 'weth',
        inputs: [],
        outputs: [{ name: '', type: 'address', internalType: 'address' }],
        stateMutability: 'view',
    },
    {
        type: 'event',
        name: 'Allocate',
        inputs: [
            {
                name: 'account',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'poolId',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'deltaX',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'deltaY',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'deltaL',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'Deallocate',
        inputs: [
            {
                name: 'account',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'poolId',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'deltaX',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'deltaY',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'deltaL',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'Init',
        inputs: [
            {
                name: 'account',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'strategy',
                type: 'address',
                indexed: false,
                internalType: 'address',
            },
            {
                name: 'tokenX',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'tokenY',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'poolId',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'reserveX',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'reserveY',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'totalLiquidity',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
        ],
        anonymous: false,
    },
    {
        type: 'event',
        name: 'Swap',
        inputs: [
            {
                name: 'account',
                type: 'address',
                indexed: true,
                internalType: 'address',
            },
            {
                name: 'poolId',
                type: 'uint256',
                indexed: true,
                internalType: 'uint256',
            },
            {
                name: 'isSwapXForY',
                type: 'bool',
                indexed: false,
                internalType: 'bool',
            },
            {
                name: 'inputAmount',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
            {
                name: 'outputAmount',
                type: 'uint256',
                indexed: false,
                internalType: 'uint256',
            },
        ],
        anonymous: false,
    },
    { type: 'error', name: 'ERC1167FailedCreateClone', inputs: [] },
    {
        type: 'error',
        name: 'Invalid',
        inputs: [
            { name: 'negative', type: 'bool', internalType: 'bool' },
            {
                name: 'swapConstantGrowth',
                type: 'uint256',
                internalType: 'uint256',
            },
        ],
    },
    { type: 'error', name: 'InvalidSwap', inputs: [] },
    { type: 'error', name: 'InvalidSwapInputTransfer', inputs: [] },
    { type: 'error', name: 'InvalidSwapOutputTransfer', inputs: [] },
    { type: 'error', name: 'InvalidTokens', inputs: [] },
    { type: 'error', name: 'Locked', inputs: [] },
    { type: 'error', name: 'Min', inputs: [] },
    { type: 'error', name: 'OnlyWETH', inputs: [] },
] as const
