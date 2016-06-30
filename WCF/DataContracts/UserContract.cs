using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace WCF.DataContracts
{
    [DataContract]
    public class UserContract
    {
        [DataMember]
        public int? UserId { get; set; }
        [DataMember(IsRequired = true, EmitDefaultValue =false)]
        public string FirstName { get; set; }
        [DataMember(IsRequired = true, EmitDefaultValue = false)]
        public string LastName { get; set; }
        [DataMember(IsRequired = true, EmitDefaultValue = false)]
        public string Email { get; set; }
    }
}