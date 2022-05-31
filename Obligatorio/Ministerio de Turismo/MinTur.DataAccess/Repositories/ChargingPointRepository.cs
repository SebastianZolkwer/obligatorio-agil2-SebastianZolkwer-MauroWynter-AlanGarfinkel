using System.Linq;
using Microsoft.EntityFrameworkCore;
using MinTur.DataAccessInterface.Repositories;
using MinTur.Domain.BusinessEntities;
using MinTur.Exceptions;
using System.Collections.Generic;

namespace MinTur.DataAccess.Repositories
{
    public class ChargingPointRepository : IChargingPointRepository
    {

        protected DbContext Context { get; set; }

        public ChargingPointRepository(DbContext dbContext)
        {
            Context = dbContext;
        }
        public ChargingPoint CreateChargingPoint(ChargingPoint chargingPoint)
        {
            Context.Entry(chargingPoint.Region).State = EntityState.Unchanged;

            Context.Set<ChargingPoint>().Add(chargingPoint);
            Context.SaveChanges();

            Context.Entry(chargingPoint.Region).State = EntityState.Detached;

            return chargingPoint;
        }

        public ChargingPoint GetChargingPointById(int chargingPointId)
        {
            if (!ChargingPointExists(chargingPointId))
                throw new ResourceNotFoundException("Could not find specified Charging Point");

            return Context.Set<ChargingPoint>().AsNoTracking().Where(c => c.Id == chargingPointId).Include(c => c.Region).FirstOrDefault();
        }

        public void DeleteChargingPoint(ChargingPoint chargingPointToBeDeleted)
        {
            if (!ChargingPointExists(chargingPointToBeDeleted.Id))
                throw new ResourceNotFoundException("Could not find specified Charging Point");

            DeleteChargingPointFromDb(chargingPointToBeDeleted);
        }

        private bool ChargingPointExists(int chargingPointId)
        {
            ChargingPoint chargingPoint = Context.Set<ChargingPoint>().AsNoTracking().Where(c => c.Id == chargingPointId).FirstOrDefault();
            return chargingPoint != null;
        }

        private void DeleteChargingPointFromDb(ChargingPoint chargingPointToBeDeleted) 
        {
            Context.Entry(chargingPointToBeDeleted.Region).State = EntityState.Unchanged;
            Context.Set<ChargingPoint>().Remove(chargingPointToBeDeleted);
            Context.SaveChanges();
            Context.Entry(chargingPointToBeDeleted.Region).State = EntityState.Detached;
        }

        public List<ChargingPoint> GetAllChargingPoints()
        {
            return Context.Set<ChargingPoint>().ToList();
        }
    }
}