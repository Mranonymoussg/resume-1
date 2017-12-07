import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card, { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import './ResumeSkillsBlock.css';

const ResumeSkillsBlock = ({ skills, tools, styles }) => (
  <ScreenBlock id="Resume-skills" className="ResumeSkillsBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage
            id='Resume.skills'
            defaultMessage='Skills'
          />
        </h2>
        <p>
          <FormattedMessage
            id='Resume.skillsSubtitle'
            defaultMessage='I can say i’m quite good at'
          />
        </p>
      </div>

      <div className="ResumeSkillsBlock-skills">
        {skills.map((skillCategory, i) =>
          <Card key={i}>
            <CardContent>
              <Avatar style={{
                ...styles[`${skillCategory[0].language.style}Color`].style,
                width: 100,
                height: 100,
                margin: '0 auto'
              }}>
                {styles[`${skillCategory[0].language.style}Color`].icon}
              </Avatar>
              <h3 style={{ color: styles[`${skillCategory[0].language.style}Color`].style.background }}>
                {skillCategory[0].language.name}
              </h3>
              {skillCategory.map((skill, j) =>
                <div key={j}>
                  {skill.name}
                </div>
              )}
            </CardContent>
          </Card>
        )}

      </div>

      <br />

      <div className="heading">
        <h2>
          <FormattedMessage
            id='Resume.tools'
            defaultMessage='Tools'
          />
        </h2>
        <p>
          <FormattedMessage
            id='Resume.toolsSubtitle'
            defaultMessage='My favorites tools'
          />
        </p>
      </div>

      <div className="ResumeSkillsBlock-tools">
        <p dangerouslySetInnerHTML={{ __html: tools }} />
      </div>
    </div>
  </ScreenBlock>
);

ResumeSkillsBlock.propTypes = {
  skills: PropTypes.array.isRequired,
  tools: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
};

export default ResumeSkillsBlock;