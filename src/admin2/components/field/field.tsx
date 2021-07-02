import React from 'react';
import {
  FieldConatiner,
  InputContainer,
  UnityContainer,
  SelectContainer,
} from './style';
import { Select, Option } from '../../global-styles';
import Input from '../input';

interface FieldProps {
  field: any;
  handler?: any;
  parentId?: any;
}

const Field: React.FC<FieldProps> = ({ field, handler, parentId }) => {
  const fieldTypes: any = {
    STRING: 'text',
    NUMBER: 'number',
    COLOR: 'color',
    DATE: 'date',
  };

  console.log(field.name);

  return (
    <FieldConatiner>
      {field.format === 'SELECT' ? (
        <SelectContainer>
          <p>{field.name}</p>
          <Select
            defaultValue={field.values[0].name}
            required
            onChange={(e) => handler && handler(e, field.id, false, parentId)}
            style={{ marginBottom: 0, marginTop: '14px' }}
          >
            {field.values.map((f: any) => (
              <Option key={f.name} value={f.name}>
                {f.name}
              </Option>
            ))}
          </Select>
        </SelectContainer>
      ) : (
        <>
          <InputContainer>
            <Input
              label={field.name}
              onChange={(e) => handler && handler(e, field.id, false, parentId)}
              version='2'
              required
              type={fieldTypes[field.format]}
            />
          </InputContainer>
          {field.unity && (
            <UnityContainer>
              <Select
                defaultValue={field.unity.values[0].name}
                required
                onChange={(e) =>
                  handler && handler(e, field.id, true, parentId)
                }
                style={{ marginBottom: 0, marginTop: '14px' }}
              >
                <Option value='null'>Выбирайте</Option>
                {field.unity.values.map((f: any) => (
                  <Option key={f.name} value={f.name}>
                    {f.shortName} ({f.shortName})
                  </Option>
                ))}
              </Select>
              {/* <div>{field.unity}</div> */}
              {/* <Input label={field.name} version='2' /> */}
            </UnityContainer>
          )}
        </>
      )}
    </FieldConatiner>
  );
};

export default React.memo(Field);
