import { Icon } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { DropMenuBox } from './styles';

export const DropMenu = () => {
  const [list, setList] = useState(['home', 'person', 'settings', 'email', 'videocam']);
  const [selectList, setSelectList] = useState(0);
  const [listState, setListState] = useState(false);
  const onToggleActive = useCallback(
    e => {
      e.preventDefault();
      e.stopPropagation();
      setListState(prev => !prev);
    },
    [listState],
  );
  const onListClick = useCallback(
    (e, index) => {
      setSelectList(index);
    },
    [selectList],
  );

  return (
    <DropMenuBox className={listState ? 'active' : ''} onClick={onToggleActive}>
      <input type="text" className="textBox" placeholder="Dropdown Menu" readOnly value={list[selectList]} />
      <div className="option">
        {list.map((item, index) => {
          return (
            <div
              onClick={e => {
                onListClick(e, index);
              }}
            >
              <Icon baseClassName="material-icons-outlined">{item}</Icon>
              {item}
            </div>
          );
        })}
      </div>
    </DropMenuBox>
  );
};
