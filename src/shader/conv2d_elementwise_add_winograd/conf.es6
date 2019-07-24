/* eslint-disable */
/**
 * @file conv2d-elementwise_add的配置文件
 * @author yangmingming
 */
export default {
    dep: [
        {
            func: 'getValueFromTensorPos',
            conf: {
                TENSOR_NAME: 'origin'
            }
        },
        {
            func: 'getValueFromTensorPos',
            conf: {
                TENSOR_NAME: 'filter'
            }
        }
    ],
    conf: [
        'LENGTH_SHAPE_FILTER',
        'WIDTH_SHAPE_FILTER',
        'HEIGHT_SHAPE_FILTER',
        'WIDTH_TEXTURE_FILTER',
        'HEIGHT_TEXTURE_FILTER',
        'CHANNEL_FILTER',

        'WIDTH_SHAPE_ORIGIN',
        'HEIGHT_SHAPE_ORIGIN',
        'LENGTH_SHAPE_ORIGIN',
        'WIDTH_TEXTURE_ORIGIN',
        'HEIGHT_TEXTURE_ORIGIN',
        'CHANNEL_ORIGIN',

        'WIDTH_SHAPE_OUT',
        'HEIGHT_SHAPE_OUT',
        'WIDTH_TEXTURE_OUT',
        'HEIGHT_TEXTURE_OUT',
        'CHANNEL_OUT',

        'TOTAL_SHAPE_COUNTER',

        'PAD_LEFT',
        'PAD_TOP',
        'AXIS',
        'MULTI_VALUE',
        'BIAS_VALUE',
        'ACTIVE_FUNCTION'
    ],
    input: [
        {
            tensor: 'filter',
            variable: 'texture',
            setter: 'initTexture',
            type: 'texture'
        },
        {
            tensor: 'origin',
            variable: 'texture',
            setter: 'initTexture',
            type: 'texture'
        },
        {
            tensor: 'counter',
            variable: 'data',
            setter: 'uniform1fv',
            type: 'uniform'
        }
    ]
};
