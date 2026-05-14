import { useEffect, useMemo, useState } from "react";
import { atelieSkemaModel } from "../models/atelieSkemaModel";

export function useAtelieSkemaController() {
  const { events, runwayShows } = atelieSkemaModel;
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [runwayPage, setRunwayPage] = useState(0);
  const [eventPage, setEventPage] = useState(0);

  const runwayPageSize = 3;
  const maxRunwayPage = Math.max(
    0,
    Math.ceil(runwayShows.length / runwayPageSize) - 1,
  );
  const visibleRunwayShows = useMemo(() => {
    const start = runwayPage * runwayPageSize;
    return runwayShows.slice(start, start + runwayPageSize);
  }, [runwayPage, runwayShows]);

  const eventPageSize = 2;
  const maxEventPage = Math.max(0, Math.ceil(events.length / eventPageSize) - 1);
  const visibleEvents = useMemo(() => {
    const start = eventPage * eventPageSize;
    return events.slice(start, start + eventPageSize);
  }, [eventPage, events]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedShow, selectedEvent]);

  const goToPrevRunwayPage = () => {
    setRunwayPage((current) => (current === 0 ? maxRunwayPage : current - 1));
  };

  const goToNextRunwayPage = () => {
    setRunwayPage((current) => (current === maxRunwayPage ? 0 : current + 1));
  };

  const goToPrevEventPage = () => {
    setEventPage((current) => (current === 0 ? maxEventPage : current - 1));
  };

  const goToNextEventPage = () => {
    setEventPage((current) => (current === maxEventPage ? 0 : current + 1));
  };

  const openShowPage = (show) => {
    setSelectedEvent(null);
    setSelectedShow(show);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openEventPage = (event) => {
    setSelectedShow(null);
    setSelectedEvent(event);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    selectedShow,
    selectedEvent,
    setSelectedShow,
    setSelectedEvent,
    visibleRunwayShows,
    visibleEvents,
    goToPrevRunwayPage,
    goToNextRunwayPage,
    goToPrevEventPage,
    goToNextEventPage,
    openShowPage,
    openEventPage,
    heroParallaxStyle: {
      transform: `translateY(${scrollY * 0.18}px) scale(1.08)`,
      transformOrigin: "center center",
    },
    selectedHeroParallaxStyle: {
      transform: `translateY(${scrollY * 0.12}px) scale(1.04)`,
      transformOrigin: "center center",
    },
  };
}
