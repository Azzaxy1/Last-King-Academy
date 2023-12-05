import PropTypes from "prop-types";

import {
  GemIcon,
  ShieldPlusIcon,
  BookOpenTextIcon,
  Clock9Icon,
} from "lucide-react";
import { Link } from "react-router-dom";

const CoursesItem = ({ course }) => {
  const isBuyed = course.pembelian === "terbeli" ? true : false;

  return (
    <Link to={`/courses/${course.id}`}>
      <div
        className={`w-full shadow-md rounded-3xl border ${
          isBuyed && "border-2 border-danger"
        }`}
      >
        <div>
          <img
            src={course.image}
            alt={`${course.title}`}
            className="h-[120px] rounded-t-3xl w-full object-cover object-top "
          />
        </div>
        <div className="py-2 px-3 space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-dark-blue text-sm font-semibold">
              {course.categories}
            </p>
            <span className="font-semibold text-sm">⭐ {course.rating}</span>
          </div>
          <div>
            <h3 className="font-semibold text-lg break-words">
              {course.title}
            </h3>
            <p className="text-base">by {course.outhor}</p>
          </div>
          <div className="flex flex-col items-start md:flex-row justify-between md:items-center">
            <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
              <ShieldPlusIcon className="w-4 h-4 text-green-500" />{" "}
              <p className="text-dark-blue">
                {course.level || "Intemediate Level"}
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
              <BookOpenTextIcon className="w-4 h-4 text-green-500" />{" "}
              <p>{course.modul || 10} Modul</p>
            </div>
            <div className="flex flex-row items-center gap-x-1 text-sm md:text-base">
              <Clock9Icon className="w-4 h-4 text-green-500" />{" "}
              <p>{course.duration || 120} Menit</p>
            </div>
          </div>
          {!isBuyed ? (
            <div>
              {course.type === "premium" ? (
                <button className="rounded-full px-3 py-1 bg-soft-blue text-sm text-white font-semibold">
                  <div className="flex flex-row items-center gap-x-2">
                    <GemIcon className="w-4 h-4" />{" "}
                    <span>Beli Rp {course.price}</span>
                  </div>
                </button>
              ) : null}
            </div>
          ) : (
            <div>
              <p>Terbeli</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

CoursesItem.propTypes = {
  course: PropTypes.object,
};

export default CoursesItem;
