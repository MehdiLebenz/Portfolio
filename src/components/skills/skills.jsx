import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useBreakpoints from '@thebiltheory/usebreakpoints';
import javascript from 'simple-icons/icons/javascript';
import graphql from 'simple-icons/icons/graphql';
import git from 'simple-icons/icons/git';
import html5 from 'simple-icons/icons/html5';
import node from 'simple-icons/icons/nodedotjs';
import docker from 'simple-icons/icons/docker';
import react from 'simple-icons/icons/react';
import next from 'simple-icons/icons/nextdotjs';
import scrumalliance from 'simple-icons/icons/scrumalliance';
import css3 from 'simple-icons/icons/css3';
import figma from 'simple-icons/icons/figma';
import jira from 'simple-icons/icons/jira';
import vercel from 'simple-icons/icons/vercel';
import slack from 'simple-icons/icons/slack';
import bitbucket from 'simple-icons/icons/bitbucket';
import notion from 'simple-icons/icons/notion';
import Typewriter from 'typewriter-effect';
import SkillsWrapper from './skillsWrapper';
import head from '../../images/head.png';

const BREAKPOINTS = [['xxs', 'xs', 's', 'md', 'l'], [330, 576, 768, 992, 1600]];
const HEAD_SIZE = 150;
const DISTANCE = 200;
const DISTANCE2 = 300;

const POSITIONS = [
  [javascript, 'x', DISTANCE, 'y', 0],
  [html5, 'x', DISTANCE * 0.8, 'y', -DISTANCE * 0.8],
  [next, 'y', -DISTANCE, 'x', 0],
  [node, 'y', -DISTANCE * 0.8, 'x', -DISTANCE * 0.8],
  [graphql, 'x', -DISTANCE, 'y', 0],
  [docker, 'x', -DISTANCE * 0.8, 'y', DISTANCE * 0.8],
  [git, 'y', DISTANCE, 'x', 0],
  [react, 'y', DISTANCE * 0.8, 'x', DISTANCE * 0.8],
  [scrumalliance, 'x', DISTANCE2, 'y', 0],
  [css3, 'x', DISTANCE2 * 0.8, 'y', -DISTANCE2 * 0.8],
  [figma, 'y', -DISTANCE2, 'x', 0],
  [jira, 'y', -DISTANCE2 * 0.8, 'x', -DISTANCE2 * 0.8],
  [vercel, 'x', -DISTANCE2, 'y', 0],
  [slack, 'x', -DISTANCE2 * 0.8, 'y', DISTANCE2 * 0.8],
  [bitbucket, 'y', DISTANCE2, 'x', 0],
  [notion, 'y', DISTANCE2 * 0.8, 'x', DISTANCE2 * 0.8],

];

export default function Skills() {
  const [, currentBreakpoint] = useBreakpoints(...BREAKPOINTS);
  const [isOpen, setIsOpen] = useState(false);
  const isSmall = currentBreakpoint <= 576;
  const headSize = HEAD_SIZE * (isSmall ? 0.8 : 1);
  const iconSkillsSize = isSmall ? 80 : 50;
  return (
    <SkillsWrapper>
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10%',

        }}
      >

        <h1 className="text">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('<span> Hummm !</span> <br/>');
              typewriter.typeString('<span> Discover my skills by clicking on my head </span>')
                .start();
            }}
          />
        </h1>
        <div
          className="skillsContainer"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.div
            style={{
              position: 'relative',
              zIndex: 10,
            }}
            initial={{ scale: 0, rotate: 720 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              delay: 1,
              duration: 2,
              type: 'spring',
            }}
            onClick={() => setIsOpen((_open) => !_open)}
          >
            {POSITIONS.map(([icon, v1, t1, v2, t2], index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  [v1]: isOpen
                    ? (t1 + (v1 === 'y' ? (isSmall ? 100 : 0) : 0))
                  * (isSmall ? 0.6 : 1)
                    : 0,
                  [v2]: isOpen
                    ? (t2 + (v2 === 'y' ? (isSmall ? 100 : 0) : 0))
                  * (isSmall ? 0.6 : 1)
                    : 0,
                  opacity: isOpen ? 1 : 0,
                  scale: isOpen ? 1 : 0,
                }}
                transition={{
                  delay: 0.08 * index,
                  duration: 0.2,
                  type: 'spring',
                  damping: 12,
                }}
                style={{
                  left: headSize / 2 - iconSkillsSize / 2,
                  height: iconSkillsSize,
                  width: iconSkillsSize,
                  position: 'absolute',
                  zIndex: 5,
                }}
                dangerouslySetInnerHTML={{
                  __html: icon.svg.replace('<svg', `<svg fill="#${icon.hex}" `),
                }}
              />
            ))}
            <motion.h2
              animate={{ scale: isOpen ? 1 : 0 }}
              transition={{
                delay: isOpen ? 0.7 : 0,
              }}
              style={{
                position: 'absolute',
                top: '30%',
                width: '100%',
                textAlign: 'center',
                fontFamily: "'Comfortaa', cursive",
                userSelect: 'none',
              }}
            >
              Mehdi
              Benzarti
            </motion.h2>
            <motion.img
              src={head}
              alt="head"
              width={headSize}
              animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
              transition={{
                delay: isOpen ? 0.6 : 0,
                duration: 1,
                type: 'spring',
              }}
            />
          </motion.div>
          <br />
          <div />
        </div>
      </div>
    </SkillsWrapper>

  );
}
