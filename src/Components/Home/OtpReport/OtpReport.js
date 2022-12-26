import React, { useEffect, useState } from 'react';
import HookReport from '../../Shared/Hook/HookReport';

const OtpReport = () => {
     const [defaultTd, setDefaultTd] = useState([]);
       useEffect(() => {
         fetch(
           "http://poultrykhamarbichitra.net/admin/Record/whatsapp_record_search.php?format=format&amp;&amp;search_sms_reports_month=search_sms_reports_month"
         )
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             setDefaultTd(data);
           });
       }, []);
    return (
      <div>
        {/* <h3>defaultTd: {defaultTd.length}</h3> */}
        <HookReport defaultTd={defaultTd}></HookReport>
      </div>
    );
};

export default OtpReport;