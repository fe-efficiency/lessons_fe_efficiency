export default {
  type: 'Form',
  props: {
    name: 'form',
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  },
  children: [
    {
      type: 'Form.Item',
      props: {
        name: 'gender',
        label: 'Gender',
        rules: [{ required: true }],
      },
      children: [
        {
          type: 'Select',
          props: {
            placeholder: 'Select a option and change input text above',
          },
          children: [
            {
              type: 'Select.Option',
              props: {
                value: 'male',
              },
              children: [
                {
                  type: 'text',
                  value: 'male',
                },
              ],
            },
            {
              type: 'Select.Option',
              props: {
                value: 'female',
              },
              children: [
                {
                  type: 'text',
                  value: 'female',
                },
              ],
            },
            {
              type: 'Select.Option',
              props: {
                value: 'other',
              },
              children: [
                {
                  type: 'text',
                  value: 'other',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Form.Item',
      props: {
        wrapperCol: { offset: 8, span: 16 },
      },
      children: [
        {
          type: 'Button',
          props: {
            type: 'primary',
            htmlType: 'submit',
          },
          children: [{ type: 'text', value: 'Submit' }],
        },
        {
          type: 'Button',
          props: {
            htmlType: 'button',
          },
          children: [{ type: 'text', value: 'Reset' }],
        },
      ],
    },
  ],
}
