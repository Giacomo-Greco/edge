import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCalendar } from '../../actions';

function dateFormat(date) {
    const newDate = new Date(date);
    return newDate.toISOString().substring(0, 10);
  }

function Calendario() {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
    ]);

    const dispatch = useDispatch();

    useEffect(() => {
        const calendar = {
            endDate: dateFormat(state[0].endDate),
            key: state[0].keys,
            startDate: dateFormat(state[0].startDate)
        }
        dispatch(addCalendar(calendar))
    }, [state])

      return(
        <div style={{position: 'relative', left: '150px', width: '250px', height: 'auto', transform: 'scale(0.95)'}}>
            <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
            />
        </div>
      )
}

export default Calendario;