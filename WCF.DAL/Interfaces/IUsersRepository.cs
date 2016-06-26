﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WCF.DAL.Entites;

namespace WCF.DAL.Interfaces
{
    public interface IUsersRepository
    {
        IList<User> Users { get; }
    }
}
